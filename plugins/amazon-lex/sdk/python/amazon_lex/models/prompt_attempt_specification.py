from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .allowed_input_types import AllowedInputTypes, AllowedInputTypesDict
from .audio_and_dtmf_input_specification import AudioAndDtmfInputSpecification, AudioAndDtmfInputSpecificationDict
from .text_input_specification import TextInputSpecification, TextInputSpecificationDict


class PromptAttemptSpecification(SdkBaseModel):
    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Indicates whether the user can interrupt a speech prompt attempt from the bot."""

    allowed_input_types: AllowedInputTypes = Field(alias="allowedInputTypes")
    audio_and_dtmf_input_specification: Optional[AudioAndDtmfInputSpecification] = Field(
        default=UNSET, alias="audioAndDTMFInputSpecification"
    )
    text_input_specification: Optional[TextInputSpecification] = Field(default=UNSET, alias="textInputSpecification")


class PromptAttemptSpecificationDict(TypedDict):
    allow_interrupt: NotRequired[bool]
    allowed_input_types: AllowedInputTypesDict
    audio_and_dtmf_input_specification: NotRequired[AudioAndDtmfInputSpecificationDict]
    text_input_specification: NotRequired[TextInputSpecificationDict]
