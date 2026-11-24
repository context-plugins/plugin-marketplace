from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1JsontojsonpRequest(SdkBaseModel):
    json_value: str = Field(alias="json")
    """The JSON data you want converted into JSONP format. Send it as an object or as a JSON-encoded string."""

    callback: Optional[str] = UNSET
    """The callback function name to wrap the JSON data. Must be a JavaScript identifier, optionally dotted (e.g.
    myCallback or window.myCallback)."""


class V1JsontojsonpRequestDict(TypedDict):
    json_value: str
    callback: NotRequired[str]
