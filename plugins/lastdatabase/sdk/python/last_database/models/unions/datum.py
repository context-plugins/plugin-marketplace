from __future__ import annotations

from typing import TypeAlias

from ..email_lead import EmailLead, EmailLeadDict
from ..fax_lead import FaxLead, FaxLeadDict
from ..phone_lead import PhoneLead, PhoneLeadDict

Datum: TypeAlias = EmailLead | PhoneLead | FaxLead

DatumDict: TypeAlias = EmailLeadDict | PhoneLeadDict | FaxLeadDict
