from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .definition import Definition, DefinitionDict


class ApiV1AutomationsPublishRequest(SdkBaseModel):
    definition: Optional[Definition] = UNSET


class ApiV1AutomationsPublishRequestDict(TypedDict):
    definition: NotRequired[DefinitionDict]
