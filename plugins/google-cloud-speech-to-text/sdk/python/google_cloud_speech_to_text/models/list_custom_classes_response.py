from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_class import CustomClass, CustomClassDict


class ListCustomClassesResponse(SdkBaseModel):
    """Message returned to the client by the ``ListCustomClasses`` method."""

    custom_classes: Optional[list[CustomClass]] = Field(default=UNSET, alias="customClasses")
    """The custom classes."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListCustomClassesResponseDict(TypedDict):
    custom_classes: NotRequired[list[CustomClassDict]]
    next_page_token: NotRequired[str]
