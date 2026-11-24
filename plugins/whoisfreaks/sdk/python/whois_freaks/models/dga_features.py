from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DgaFeatures(SdkBaseModel):
    domain_length: Optional[int] = UNSET
    vowel_consonant_ratio: Optional[float] = UNSET
    ngram_perplexity: Optional[float] = UNSET
    shannon_entropy: Optional[float] = UNSET
    digit_letter_ratio: Optional[float] = UNSET
    consonant_streak_max: Optional[int] = UNSET
    tld_in_known_dga_set: Optional[bool] = UNSET


class DgaFeaturesDict(TypedDict):
    domain_length: NotRequired[int]
    vowel_consonant_ratio: NotRequired[float]
    ngram_perplexity: NotRequired[float]
    shannon_entropy: NotRequired[float]
    digit_letter_ratio: NotRequired[float]
    consonant_streak_max: NotRequired[int]
    tld_in_known_dga_set: NotRequired[bool]
