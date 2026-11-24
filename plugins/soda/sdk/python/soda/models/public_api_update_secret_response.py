from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_secret_dto import PublicApiSecretDto, PublicApiSecretDtoDict


class PublicApiUpdateSecretResponse(SdkBaseModel):
    secret: Optional[PublicApiSecretDto] = UNSET


class PublicApiUpdateSecretResponseDict(TypedDict):
    secret: NotRequired[PublicApiSecretDtoDict]
