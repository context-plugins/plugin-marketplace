from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_external_account_binding import AcmeExternalAccountBinding, AcmeExternalAccountBindingDict


class CreateAcmeExternalAccountBindingResponse(SdkBaseModel):
    external_account_binding: Optional[AcmeExternalAccountBinding] = Field(
        default=UNSET, alias="ExternalAccountBinding"
    )


class CreateAcmeExternalAccountBindingResponseDict(TypedDict):
    external_account_binding: NotRequired[AcmeExternalAccountBindingDict]
