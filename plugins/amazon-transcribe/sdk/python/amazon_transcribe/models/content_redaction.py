from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pii_entity_type import PiiEntityTypeOrStr
from .enums.redaction_output import RedactionOutputOrStr


class ContentRedaction(SdkBaseModel):
    redaction_type: Literal["PII"] = Field(default="PII", alias="RedactionType")
    """Specify the category of information you want to redact; PII (personally identifiable information) is the only
    valid value. You can use PiiEntityTypes to choose which types of PII you want to redact. If you do not include
    PiiEntityTypes in your request, all PII is redacted."""

    redaction_output: RedactionOutputOrStr = Field(alias="RedactionOutput")
    """Specify if you want only a redacted transcript, or if you want a redacted and an unredacted transcript. When you
    choose redacted Amazon Transcribe creates only a redacted transcript. When you choose redacted_and_unredacted Amazon
    Transcribe creates a redacted and an unredacted transcript (as two separate files)."""

    pii_entity_types: Optional[list[PiiEntityTypeOrStr]] = Field(default=UNSET, alias="PiiEntityTypes")
    """Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can
    include as many types as you'd like, or you can select ALL. If you do not include PiiEntityTypes in your request,
    all PII is redacted."""


class ContentRedactionDict(TypedDict):
    redaction_type: Literal["PII"]
    redaction_output: RedactionOutputOrStr
    pii_entity_types: NotRequired[list[PiiEntityTypeOrStr]]
