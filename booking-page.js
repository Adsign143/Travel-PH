(() => {
 const form=document.getElementById('checkoutForm');
 const destination=document.getElementById('tripDestination');
 const selected=new URLSearchParams(window.location.search).get('destination');
 if (Array.from(destination.options).some(option=>option.value===selected)) destination.value=selected;
 const date=document.getElementById('tripDate');
 const today=new Date();
 date.min=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const first=String(data.get('firstName')).trim(),last=String(data.get('lastName')).trim(),phone=String(data.get('phone')).trim();
  const status=document.getElementById('booking-status');
  if(!first||!last||!phone){status.textContent='Please complete your name and phone number.';return;}
  const body=`Hello TravelPH,\n\nI would like to inquire about a trip.\n\nDestination: ${data.get('destination')}\nPreferred departure: ${data.get('date')}\nTravelers: ${data.get('travelers')}\nName: ${first} ${last}\nEmail: ${data.get('email')}\nPhone: ${phone}\n\nNotes: ${String(data.get('notes')||'').trim() || 'None'}\n\nPlease let me know the availability and next steps.`;
  window.location.href='mailto:travelph@gmail.com?subject='+encodeURIComponent('Booking inquiry: '+data.get('destination'))+'&body='+encodeURIComponent(body.replace(/\n/g,'\n'));
  status.textContent='Opening your email app. Review and send your inquiry there. You can also call us using the link on this page.';
 });
})();
