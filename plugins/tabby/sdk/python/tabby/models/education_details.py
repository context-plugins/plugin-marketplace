from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.merchant_subtype import MerchantSubtypeOrStr
from .program import Program, ProgramDict
from .student_history import StudentHistory, StudentHistoryDict


class EducationDetails(SdkBaseModel):
    """Education-vertical risk signals for the current session."""

    merchant_subtype: MerchantSubtypeOrStr
    """Duplicated from onboarding config for self-check."""

    program: Program
    """Details of the education program being paid for."""

    student_history: StudentHistory
    """Student's payment history with the merchant."""


class EducationDetailsDict(TypedDict):
    merchant_subtype: MerchantSubtypeOrStr
    program: ProgramDict
    student_history: StudentHistoryDict
