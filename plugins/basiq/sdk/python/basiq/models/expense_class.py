from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExpenseClass(SdkBaseModel):
    """Class represents one class of classification system"""

    class_code: str = Field(alias="classCode")
    """Classification code for HEC classification: 4 levels class, group, subdivision and division."""

    class_title: str = Field(alias="classTitle")
    """Classification code for HEC classification: 4 levels class, group, subdivision and division."""

    division_code: str = Field(alias="divisionCode")
    division_title: str = Field(alias="divisionTitle")


class ExpenseClassDict(TypedDict):
    class_code: str
    class_title: str
    division_code: str
    division_title: str
