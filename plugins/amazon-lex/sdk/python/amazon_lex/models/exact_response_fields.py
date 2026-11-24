from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExactResponseFields(SdkBaseModel):
    question_field: str = Field(alias="questionField")
    """The name of the field that contains the query made to the OpenSearch Service database."""

    answer_field: str = Field(alias="answerField")
    """The name of the field that contains the answer to the query made to the OpenSearch Service database."""


class ExactResponseFieldsDict(TypedDict):
    question_field: str
    answer_field: str
