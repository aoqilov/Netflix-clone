import React, { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default class AskTV extends Component {
  render() {
    return (
      <div>
        <section className="ask">
          <div className="ask-box">
            <h1>Frequently Asked Questions</h1>

            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">What is Netflix</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want without a single
                  commercial – all for one low monthly price. There's always
                  something new to discover and new TV shows and movies are
                  added every week!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">
                  How much does Netflix coast
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from EUR7.99 to EUR11.99 a month. No extra costs, no
                  contracts.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">
                  where can i watch ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br /> You can also
                  download your favorite shows with the iOS, Android, or Windows
                  10 app. Use downloads to watch while you're on the go and
                  without an internet connection. Take Netflix with you
                  anywhere. How do I cancel?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="acor-icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-acor">What is Netflix</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="par-acor">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want without a single
                  commercial – all for one low monthly price. There's always
                  something new to discover and new TV shows and movies are
                  added every week!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <button className="ask-btn">get started</button>
        </section>
      </div>
    );
  }
}
