from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute import AttributeOrStr


class ApplicationProperty(SdkBaseModel):
    """An application property. It is a caller defined JSON object that Bitbucket will store and return. The
    ``_attributes`` field at its top level can be used to control who is allowed to read and update the property. The
    keys of the JSON object must match an allowed pattern. For details, see `Application properties
    </cloud/bitbucket/application-properties/>`__."""

    attributes: Optional[list[AttributeOrStr]] = Field(default=UNSET, alias="_attributes")


class ApplicationPropertyDict(TypedDict):
    attributes: NotRequired[list[AttributeOrStr]]
