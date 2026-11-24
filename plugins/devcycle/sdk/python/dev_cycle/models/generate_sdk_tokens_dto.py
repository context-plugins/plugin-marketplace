from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GenerateSdkTokensDto(SdkBaseModel):
    client: Optional[bool] = UNSET
    server: Optional[bool] = UNSET
    mobile: Optional[bool] = UNSET


class GenerateSdkTokensDtoDict(TypedDict):
    client: NotRequired[bool]
    server: NotRequired[bool]
    mobile: NotRequired[bool]
