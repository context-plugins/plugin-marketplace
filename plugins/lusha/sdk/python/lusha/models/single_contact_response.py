from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contact_single_response import ContactSingleResponse, ContactSingleResponseDict


class SingleContactResponse(SdkBaseModel):
    contact: ContactSingleResponse


class SingleContactResponseDict(TypedDict):
    contact: ContactSingleResponseDict
