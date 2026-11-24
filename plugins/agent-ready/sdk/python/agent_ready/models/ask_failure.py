from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ask_meta import AskMeta, AskMetaDict
from .error2 import Error2, Error2Dict


class AskFailure(SdkBaseModel):
    """NLWeb failure envelope."""

    meta: AskMeta = Field(alias="_meta")
    """NLWeb response envelope metadata."""

    error: Error2


class AskFailureDict(TypedDict):
    meta: AskMetaDict
    error: Error2Dict
