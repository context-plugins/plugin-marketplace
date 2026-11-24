from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateRequest(SdkBaseModel):
    title: str
    """Recipe title (e.g. "Vanilla Yogurt Parfait")"""

    ingredients: list[str]
    """List of strings where each element is a recipe ingredient (e.g. ["2 cups of greek yogurt", "2 tablespoons of
    honey", "1 teaspoon of vanilla extract"]). Don't include items in the list that the user already mentioned they
    have."""

    instructions: list[str]
    """List of strings where each element is a recipe instruction"""

    question: str
    """This field stores the question asked by the user about recipe or mealplan in the current chat session. For
    instance, a user can ask "recipe for chocolate cookies" and the assistant responds by listing the ingredients needed
    to make chocolate cookies. In this chat interaction, we need to return "recipe for chocolate cookies" as the value
    in this field"""

    partner_name: str
    """The value used to populate this field should always be "OpenAI"
    """


class CreateRequestDict(TypedDict):
    title: str
    ingredients: list[str]
    instructions: list[str]
    question: str
    partner_name: str
