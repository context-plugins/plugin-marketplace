from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.qa_subject_type import QaSubjectTypeOrStr


class QaCheckResponse(SdkBaseModel):
    key: str
    subject_type: QaSubjectTypeOrStr
    """What a check judges: a completed evaluation trace, or a task's current version."""

    title: str
    question: str
    description: str


class QaCheckResponseDict(TypedDict):
    key: str
    subject_type: QaSubjectTypeOrStr
    title: str
    question: str
    description: str
