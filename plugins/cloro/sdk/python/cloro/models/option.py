from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.value import Value, ValueDict


class Option(SdkBaseModel):
    label: str
    """The text ChatGPT shows for the option."""

    value: Value
    """The value that the option puts in the follow-up prompt. It can differ from ``label``. ``true`` for a checkbox
    that stands alone."""

    selected: bool
    """Whether ChatGPT selects the option by default."""


class OptionDict(TypedDict):
    label: str
    value: ValueDict
    selected: bool
