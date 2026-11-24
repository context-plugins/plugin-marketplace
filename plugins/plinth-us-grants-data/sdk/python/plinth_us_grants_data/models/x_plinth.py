from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_stamp import DatasetStamp, DatasetStampDict
from .response_warning import ResponseWarning, ResponseWarningDict
from .unidentified import Unidentified, UnidentifiedDict
from .unions.excluded1 import Excluded1, Excluded1Dict


class XPlinth(SdkBaseModel):
    """Non-Candid metadata. Safe to ignore for compatibility; ``unsupported`` is the one to assert on."""

    warnings: Optional[list[ResponseWarning]] = UNSET
    unsupported: Optional[list[str]] = UNSET
    """Parameters that did not apply. Non-empty means the answer is not the question asked."""

    dataset: Optional[DatasetStamp] = UNSET
    datasets: Optional[list[DatasetStamp]] = UNSET
    """Every corpus this response could have drawn on, each with its own licence terms. /sql only: you write the query,
    so which corpus answered is not knowable per response — honour every licence listed."""

    excluded: Optional[dict[str, Excluded1]] = UNSET
    """Per-class cost of ``?exclude=``, keyed by class name, plus ``overlapping`` — true when classes were counted
    independently and therefore sum to more than the whole. /grants/summary only."""

    unidentified: Optional[Unidentified] = UNSET
    """On /grants/recipients: the grants held out of the ranking because their recipient is a person, a class of people,
    or nobody the filer named. Add these back to reconcile with /grants/summary."""


class XPlinthDict(TypedDict):
    warnings: NotRequired[list[ResponseWarningDict]]
    unsupported: NotRequired[list[str]]
    dataset: NotRequired[DatasetStampDict]
    datasets: NotRequired[list[DatasetStampDict]]
    excluded: NotRequired[dict[str, Excluded1Dict]]
    unidentified: NotRequired[UnidentifiedDict]
