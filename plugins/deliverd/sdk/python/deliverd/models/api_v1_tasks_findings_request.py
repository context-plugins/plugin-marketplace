from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind8 import Kind8OrStr


class ApiV1TasksFindingsRequest(SdkBaseModel):
    kind: Kind8OrStr
    """hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or action. A decision
    is recorded as a suggestion until a person confirms it"""

    title: str
    body: Optional[str] = UNSET
    """The substance, written to be read by a person. Not your reasoning — what you tested, saw or concluded"""

    evidence: Optional[list[str]] = UNSET
    """Short pieces of evidence: a log line, a claim value, a measurement"""


class ApiV1TasksFindingsRequestDict(TypedDict):
    kind: Kind8OrStr
    title: str
    body: NotRequired[str]
    evidence: NotRequired[list[str]]
