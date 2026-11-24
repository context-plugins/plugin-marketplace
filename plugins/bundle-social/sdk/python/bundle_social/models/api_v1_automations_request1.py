from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .definition import Definition, DefinitionDict
from .enums.platform_scope import PlatformScopeOrStr


class ApiV1AutomationsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    platform_scope: Optional[PlatformScopeOrStr] = Field(default=UNSET, alias="platformScope")
    definition: Optional[Definition] = UNSET


class ApiV1AutomationsRequest1Dict(TypedDict):
    name: NotRequired[str]
    platform_scope: NotRequired[PlatformScopeOrStr]
    definition: NotRequired[DefinitionDict]
