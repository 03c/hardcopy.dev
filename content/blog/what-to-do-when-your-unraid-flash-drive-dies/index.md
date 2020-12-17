---
  title: "What to do when your Unraid flash drive dies..."
  date: "2020-12-17T17:24:34Z"
---

My Unraid flash drive has died again this week - it lasted about 3 months this time. The only way I knew it had died is that I was missing all the CSS when logging in and there were some strange PHP errors.

Now the first time, I had no backups of the flash drive at all - yes, I know!

But I did learn from my mistake and this time I have backups - but this is still a pain!

The steps to fix are as follows:

- Create new Unraid USB using the Unraid Flash Utility which can be found on the [Unraid website](https://unraid.net/download). Be sure to use the same version you had installed!
- Screenshot the main array page in Unraid if you can.
- Power down and swap the USB drives over.
- Power on.
- Follow the procedure to replace the flash drive found on the [Unraid Wiki](https://wiki.unraid.net/UnRAID_6/Changing_The_Flash_Device). This process will email you a brand new registration key.
- Copy everything in the config folder over to the new USB drive from your backup.
- Restart.
- Here I had to reconfigure the whole array, so use the screenshot from before to make sure it is exactly the same as before.
- Start the array and any services you need.

At this point you might want to check everything is working as expected. It was a few days before I realized one of my user scripts was not running! Oops!

I have two Pro keys, which is good because you can only replace your key every 12 months. If I only had one I might be in a pickle
