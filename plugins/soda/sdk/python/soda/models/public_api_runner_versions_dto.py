from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiRunnerVersionsDto(SdkBaseModel):
    agent: Optional[str] = UNSET
    library: Optional[str] = UNSET
    runner: Optional[str] = UNSET


class PublicApiRunnerVersionsDtoDict(TypedDict):
    agent: NotRequired[str]
    library: NotRequired[str]
    runner: NotRequired[str]
