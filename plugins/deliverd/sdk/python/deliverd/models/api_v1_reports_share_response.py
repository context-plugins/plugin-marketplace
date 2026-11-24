from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .granted import Granted, GrantedDict


class ApiV1ReportsShareResponse(SdkBaseModel):
    granted: list[Granted]
    unresolved_phrases: list[str] = Field(alias="unresolvedPhrases")


class ApiV1ReportsShareResponseDict(TypedDict):
    granted: list[GrantedDict]
    unresolved_phrases: list[str]
