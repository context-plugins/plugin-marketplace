from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_prisma_reviews_platforms_api import TypePrismaReviewsPlatformsApiOrStr


class ConnectField(SdkBaseModel):
    name: str
    """Key inside ``credentials``, or ``listing_url`` at the top level of the request."""

    label: str
    """Label for a form."""

    type_: TypePrismaReviewsPlatformsApiOrStr = Field(alias="type")
    required: bool
    placeholder: Optional[str] = UNSET
    """Example value."""

    help: Optional[str] = UNSET
    """Where to find the value."""

    file_accept: Optional[str] = UNSET
    """For textarea fields: the file the value usually comes from."""


class ConnectFieldDict(TypedDict):
    name: str
    label: str
    type_: TypePrismaReviewsPlatformsApiOrStr
    required: bool
    placeholder: NotRequired[str]
    help: NotRequired[str]
    file_accept: NotRequired[str]
