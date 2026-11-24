from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .publication import Publication, PublicationDict


class PublicationsGetResponse(SdkBaseModel):
    data: Publication


class PublicationsGetResponseDict(TypedDict):
    data: PublicationDict
