from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DataPrivacy(SdkBaseModel):
    child_directed: bool = Field(alias="childDirected")
    """For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of
    Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part,
    to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or
    false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon
    Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to
    children under age 13 and"""


class DataPrivacyDict(TypedDict):
    child_directed: bool
