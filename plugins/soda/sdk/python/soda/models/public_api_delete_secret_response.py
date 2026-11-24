from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiDeleteSecretResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class PublicApiDeleteSecretResponseDict(TypedDict):
    message: NotRequired[str]
