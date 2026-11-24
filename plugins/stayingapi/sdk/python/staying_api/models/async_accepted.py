from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict
from .meta1 import Meta1, Meta1Dict


class AsyncAccepted(SdkBaseModel):
    """Returned (202) when projected runtime exceeds the 8s async threshold. Poll pollUrl until terminal. A Retry-After
    header hints the back-off."""

    data: Data
    meta: Meta1


class AsyncAcceptedDict(TypedDict):
    data: DataDict
    meta: Meta1Dict
