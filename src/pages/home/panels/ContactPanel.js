import { Component } from 'react';
import Container from "@mui/material/Container";
import { t } from "react-i18nify";

class ContactPanel extends Component {
	render() {
		return (
			<Container maxWidth={false} disableGutters={true}>
				<div className="tc_ContactPanel" id="contact">
					<Container maxWidth="lg">
						<div class="fr-callout fr-mb-4w">
							<p class="fr-callout__title">Contactez-nous</p>
							<p class="fr-callout__text">
								Le support de Tchap est joignable à l'adresse <b>support@tchap.beta.gouv.fr</b>. 
							  	Pour toute autre question, vous pouvez nous envoyer un email à <b>{t('links.contact')}</b>.
							</p>
							<a class="fr-btn"
							   href={'mailto:' + t('links.contact')}
								 target="_blank"
								 rel="noreferer noopener"
								 data-probe-name="contact">
								Ecrivez-nous
							</a>
						</div>
					</Container>
				</div>
			</Container>
		);
	}
}

export default ContactPanel;
