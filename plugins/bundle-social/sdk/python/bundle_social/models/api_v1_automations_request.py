from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .definition import Definition, DefinitionDict
from .enums.platform_scope import PlatformScopeOrStr


class ApiV1AutomationsRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    name: str
    platform_scope: PlatformScopeOrStr = Field(alias="platformScope")
    definition: Optional[Definition] = UNSET


class ApiV1AutomationsRequestDict(TypedDict):
    team_id: str
    name: str
    platform_scope: PlatformScopeOrStr
    definition: NotRequired[DefinitionDict]
