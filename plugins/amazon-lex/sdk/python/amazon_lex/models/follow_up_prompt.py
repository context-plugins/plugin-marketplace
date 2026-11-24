from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict


class FollowUpPrompt(SdkBaseModel):
    prompt: Prompt
    rejection_statement: Statement = Field(alias="rejectionStatement")


class FollowUpPromptDict(TypedDict):
    prompt: PromptDict
    rejection_statement: StatementDict
