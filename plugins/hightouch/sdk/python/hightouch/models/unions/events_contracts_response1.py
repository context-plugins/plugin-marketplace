from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..event_contract import EventContract, EventContractDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

EventsContractsResponse1: TypeAlias = EventContract | ValidateErrorJson | InternalServerErrorOrStr

EventsContractsResponse1Dict: TypeAlias = EventContractDict | ValidateErrorJsonDict | InternalServerErrorOrStr
