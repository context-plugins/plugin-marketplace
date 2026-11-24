from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiDeleteDatasourceResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class PublicApiDeleteDatasourceResponseDict(TypedDict):
    message: NotRequired[str]
