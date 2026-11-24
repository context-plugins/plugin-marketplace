from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..event_domain import EventDomain, EventDomainDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

EventsDomainsResponse1: TypeAlias = EventDomain | ValidateErrorJson | InternalServerErrorOrStr

EventsDomainsResponse1Dict: TypeAlias = EventDomainDict | ValidateErrorJsonDict | InternalServerErrorOrStr
