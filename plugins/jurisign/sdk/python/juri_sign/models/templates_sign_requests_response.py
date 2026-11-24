from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sign_request_juri_sign_templates_api import SignRequestJuriSignTemplatesApi, SignRequestJuriSignTemplatesApiDict


class TemplatesSignRequestsResponse(SdkBaseModel):
    data: Optional[SignRequestJuriSignTemplatesApi] = UNSET


class TemplatesSignRequestsResponseDict(TypedDict):
    data: NotRequired[SignRequestJuriSignTemplatesApiDict]
