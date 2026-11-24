from __future__ import annotations

from typing import TypeAlias

from ..enums.internal_server_error import InternalServerErrorOrStr
from ..list_match_booster_runs_output import ListMatchBoosterRunsOutput, ListMatchBoosterRunsOutputDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

ModelsMatchBoosterRunsResponse: TypeAlias = ListMatchBoosterRunsOutput | ValidateErrorJson | InternalServerErrorOrStr

ModelsMatchBoosterRunsResponseDict: TypeAlias = (
    ListMatchBoosterRunsOutputDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
