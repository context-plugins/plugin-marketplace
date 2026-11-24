from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1 import Error1, Error1Dict


class Error(SdkBaseModel):
    """Base type for most resource objects. It defines the common ``type`` element that identifies an object's type. It
    also identifies the element as Swagger's ``discriminator``."""

    type_: str = Field(alias="type")
    error: Optional[Error1] = UNSET


class ErrorDict(TypedDict):
    type_: str
    error: NotRequired[Error1Dict]
