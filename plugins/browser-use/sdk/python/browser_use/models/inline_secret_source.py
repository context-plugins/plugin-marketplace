from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InlineSecretSource(SdkBaseModel):
    """A value the caller supplies directly with the run."""

    type_: Literal["inline"] = Field(default="inline", alias="type")
    value: str
    """The secret itself. Limited to 4096 bytes once encoded for encryption; non-ASCII characters cost more than one
    byte each."""


class InlineSecretSourceDict(TypedDict):
    type_: Literal["inline"]
    value: str
