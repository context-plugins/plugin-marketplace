from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResponseFormatJsonObject(SdkBaseModel):
    """JSON object response format.

    An older method of generating JSON responses. Using ``json_schema`` is recommended for models that support it. Note
    that the model will not generate JSON without a system or user message instructing it to do so."""

    type_: Literal["json_object"] = Field(default="json_object", alias="type")


class ResponseFormatJsonObjectDict(TypedDict):
    type_: Literal["json_object"]
