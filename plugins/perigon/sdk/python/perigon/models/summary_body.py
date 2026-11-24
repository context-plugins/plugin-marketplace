from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.method import Method, MethodOrStr
from .enums.model import Model, ModelOrStr
from .enums.summarize_field import SummarizeFieldOrStr


class SummaryBody(SdkBaseModel):
    """Request body for the Search-Summarizer endpoint. Contains the user’s summary instructions, how many articles to
    include, which fields to use, the retrieval method, and LLM generation settings."""

    prompt: (
        str | None
    ) = "You are a helpful assistant tasked with summarizing the search results. In a casual, natural tone, craft a vivid, insightful synthesis in one fluid paragraph (no more than 125 words). Cover as many relevant points as possible, connect ideas, highlight themes, and surface anything interesting or surprising."
    """Instructions guiding how the summary should be written. Maximum length: 2,048 characters."""

    max_article_count: int | None = Field(default=10, alias="maxArticleCount")
    """Maximum number of articles used to generate the summary. Must be between 1 and 100."""

    returned_article_count: int | None = Field(default=10, alias="returnedArticleCount")
    """Maximum number of articles returned in the response. Must be between 1 and 100 and cannot return more articles
    than maxArticleCount selected."""

    summarize_fields: OptionalNullable[list[SummarizeFieldOrStr]] = Field(default=UNSET, alias="summarizeFields")
    """Which article fields to include when generating the summary. Up to three values from TITLE, CONTENT, SUMMARY."""

    method: MethodOrStr | None = Method.ARTICLES
    """Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS selects the first
    article from each of up to maxArticleCount stories."""

    model: ModelOrStr | None = Model.GPT_4_1
    """The underlying LLM model to use for generation."""

    temperature: float | None = 0.7
    """Sampling temperature from 0.0 to 2.0. Ignored by gpt-5.4-mini, gpt-5.4-nano, gpt-5-mini, and gpt-5-nano."""

    top_p: float | None = Field(default=1.0, alias="topP")
    """Nucleus sampling (top-p) for the LLM (0.0 to 1.0)."""

    max_tokens: int | None = Field(default=2048, alias="maxTokens")
    """Maximum number of tokens to generate. Must be 0 or greater."""


class SummaryBodyDict(TypedDict):
    prompt: NotRequired[str | None]
    max_article_count: NotRequired[int | None]
    returned_article_count: NotRequired[int | None]
    summarize_fields: NotRequired[list[SummarizeFieldOrStr] | None]
    method: NotRequired[MethodOrStr | None]
    model: NotRequired[ModelOrStr | None]
    temperature: NotRequired[float | None]
    top_p: NotRequired[float | None]
    max_tokens: NotRequired[int | None]
