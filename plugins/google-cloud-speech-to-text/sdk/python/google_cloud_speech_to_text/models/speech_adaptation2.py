from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .abnf_grammar2 import AbnfGrammar2, AbnfGrammar2Dict
from .custom_class import CustomClass, CustomClassDict
from .phrase_set import PhraseSet, PhraseSetDict


class SpeechAdaptation2(SdkBaseModel):
    """Speech adaptation configuration improves the accuracy of speech recognition. For more information, see the
    `speech adaptation <https://cloud.google.com/speech-to-text/docs/adaptation>`__ documentation. When speech
    adaptation is set it supersedes the ``speech_contexts`` field."""

    abnf_grammar: Optional[AbnfGrammar2] = Field(default=UNSET, alias="abnfGrammar")
    """Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of derivation rules. See
    specifications: https://www.w3.org/TR/speech-grammar"""

    phrase_set_references: Optional[list[str]] = Field(default=UNSET, alias="phraseSetReferences")
    """A collection of phrase set resource names to use."""

    custom_classes: Optional[list[CustomClass]] = Field(default=UNSET, alias="customClasses")
    """A collection of custom classes. To specify the classes inline, leave the class' ``name`` blank and fill in the
    rest of its fields, giving it a unique ``custom_class_id``. Refer to the inline defined class in phrase hints by its
    ``custom_class_id``."""

    phrase_sets: Optional[list[PhraseSet]] = Field(default=UNSET, alias="phraseSets")
    """A collection of phrase sets. To specify the hints inline, leave the phrase set's ``name`` blank and fill in the
    rest of its fields. Any phrase set can use any custom class."""


class SpeechAdaptation2Dict(TypedDict):
    abnf_grammar: NotRequired[AbnfGrammar2Dict]
    phrase_set_references: NotRequired[list[str]]
    custom_classes: NotRequired[list[CustomClassDict]]
    phrase_sets: NotRequired[list[PhraseSetDict]]
