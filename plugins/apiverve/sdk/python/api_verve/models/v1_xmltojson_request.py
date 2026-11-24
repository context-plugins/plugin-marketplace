from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1XmltojsonRequest(SdkBaseModel):
    xml: str
    """The XML content to convert to JSON"""


class V1XmltojsonRequestDict(TypedDict):
    xml: str
