from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.importance_level import ImportanceLevelOrStr


class CustomRankingInfo(SdkBaseModel):
    """Custom ranking information for SearchJobsRequest."""

    ranking_expression: Optional[str] = Field(default=UNSET, alias="rankingExpression")
    """Required. Controls over how job documents get ranked on top of existing relevance score (determined by API
    algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking
    position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /,
    where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or
    an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The
    expression must be < 200 characters in length. The expression is considered invalid for a job if the expression
    references custom attributes that are not populated on the job or if the expression results in a divide by zero. If
    an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year +
    25) * 0.25 - (freshness / 0.5)"""

    importance_level: Optional[ImportanceLevelOrStr] = Field(default=UNSET, alias="importanceLevel")
    """Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's
    final ranking position. An error is thrown if not specified."""


class CustomRankingInfoDict(TypedDict):
    ranking_expression: NotRequired[str]
    importance_level: NotRequired[ImportanceLevelOrStr]
