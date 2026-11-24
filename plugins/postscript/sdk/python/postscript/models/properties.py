from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Properties(SdkBaseModel):
    """These are the properties of the event. These properties will be exposed in the Postscript platform for things
    like filtering and merge tags to merchants."""

    key: str = "value"
    """Properties can be key:value pairs. We will attempt to choose the appropriate data type for the value depending on
    what you send us. We currently accept strings, booleans, integers, floats, and datetime strings."""


class PropertiesDict(TypedDict):
    key: NotRequired[str]
