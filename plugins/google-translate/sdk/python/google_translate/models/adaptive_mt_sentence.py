from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdaptiveMtSentence(SdkBaseModel):
    """An AdaptiveMt sentence entry."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp when this sentence was created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp when this sentence was last updated."""

    source_sentence: Optional[str] = Field(default=UNSET, alias="sourceSentence")
    """Required. The source sentence."""

    target_sentence: Optional[str] = Field(default=UNSET, alias="targetSentence")
    """Required. The target sentence."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the file, in form of
    ``projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}``"""


class AdaptiveMtSentenceDict(TypedDict):
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    source_sentence: NotRequired[str]
    target_sentence: NotRequired[str]
    name: NotRequired[str]
