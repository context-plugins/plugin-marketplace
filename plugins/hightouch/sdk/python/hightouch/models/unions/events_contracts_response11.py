from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..event_contract_update import EventContractUpdate, EventContractUpdateDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

EventsContractsResponse11: TypeAlias = EventContractUpdate | ValidateErrorJson | InternalServerErrorOrStr

EventsContractsResponse11Dict: TypeAlias = EventContractUpdateDict | ValidateErrorJsonDict | InternalServerErrorOrStr
