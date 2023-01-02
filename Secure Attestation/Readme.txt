                     ** How to upload Website files on Lightsail **  

            Step 1 :- Download FileZilla (https://filezilla-project.org/)
            Step 2 :- Open Filezilla then go to sitemanager and create new site 
            Step 3 :- Put the host ip & select protocol SFTP - SSH File transfer protocol then choose logon type key file
            Step 4 :- Username will be bitnami then select the key file that you've downloaded then click on connect
            Step 5 :- After connnecting you ncan upload the files on the /bitnami/htdocs folder 




                    ** How to link your ip to domain name on Godaddy ** 

            Step 1 :- Login to Godaddy.com then go to my products then you will find list of domains that you have bought
            Step 2 :- Click on DNS under the Domain name 
            Step 3 :- Edit the type A recored value with the ip address of the webiste then click on save




                    ** How to add SSL Cert on Lightsail using letsEncrypt **
            
            Step 1 :- Connect using our browser-based SSH client from Lightsail
            Step 2 :- Then run the command [Sudo /opt/bitnami/bncert-tool]
            Step 3 :- Put the domain name then put (y) in Enable HTTP to HTTPS Redirection
                                                   (y) in Enable non-www to www Redirection
                                                   (y) Agree the Changes
                                                   (y) Agree to Let's Encrypt Subscrber Agreement

                    ** Email related setup (sendmail) for server **
           https://www.cloudbooklet.com/how-to-install-and-setup-sendmail-on-debian-10/

                


         