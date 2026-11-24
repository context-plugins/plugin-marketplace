from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.term_classification import TermClassificationOrStr
from .purview import Purview, PurviewDict


class ApiV1ScreenRequest(SdkBaseModel):
    text: Optional[str] = UNSET
    """The text about to be sent to a model. Screened in memory and never stored"""

    counts: Optional[dict[str, int]] = UNSET
    """What was found, by kind, when the text was screened where it is (the SDKs do this) and is not being sent"""

    term_classification: Optional[TermClassificationOrStr] = Field(default=UNSET, alias="termClassification")
    """With counts: the strictest classification among the terms found"""

    ai_system_id: Optional[UUID] = Field(default=UNSET, alias="aiSystemId")
    """The AI register's record for the model it is going to"""

    purpose: Optional[str] = UNSET
    """What the text is for, for the person asked: 'Summarise a claim file'"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference, kept on any approval this asks for"""

    purview: Optional[Purview] = UNSET
    """Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction its DLP policies
    returned (block, warn, audit or none). The text itself went to Microsoft, never here"""

    ask: Optional[bool] = UNSET
    """Whether an ``ask`` verdict creates an approval for a person. Default true"""


class ApiV1ScreenRequestDict(TypedDict):
    text: NotRequired[str]
    counts: NotRequired[dict[str, int]]
    term_classification: NotRequired[TermClassificationOrStr]
    ai_system_id: NotRequired[UUID]
    purpose: NotRequired[str]
    external_id: NotRequired[str]
    purview: NotRequired[PurviewDict]
    ask: NotRequired[bool]
