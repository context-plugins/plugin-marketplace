from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class Error(SdkBaseModel):
    """Every error has this shape. Some codes add fields (for example ``platform``, ``url``, ``max_length``,
    ``connection_id``, ``upgrade_url``, ``required_fields``)."""

    error: Error1


class ErrorDict(TypedDict):
    error: Error1Dict
