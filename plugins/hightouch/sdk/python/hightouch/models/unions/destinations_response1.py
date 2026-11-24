from __future__ import annotations

from typing import TypeAlias

from ..destination import Destination, DestinationDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DestinationsResponse1: TypeAlias = Destination | ValidateErrorJson | InternalServerErrorOrStr

DestinationsResponse1Dict: TypeAlias = DestinationDict | ValidateErrorJsonDict | InternalServerErrorOrStr
