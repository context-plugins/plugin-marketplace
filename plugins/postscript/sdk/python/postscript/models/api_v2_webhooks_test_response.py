from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2WebhooksTestResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiV2WebhooksTestResponseDict(TypedDict):
    message: NotRequired[str]
