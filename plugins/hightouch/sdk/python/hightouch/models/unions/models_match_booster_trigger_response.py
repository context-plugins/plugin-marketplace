from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..match_booster_trigger_output import MatchBoosterTriggerOutput, MatchBoosterTriggerOutputDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsMatchBoosterTriggerResponse: TypeAlias = MatchBoosterTriggerOutput | ValidateErrorJson | InternalServerErrorOrStr

ModelsMatchBoosterTriggerResponseDict: TypeAlias = (
    MatchBoosterTriggerOutputDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
