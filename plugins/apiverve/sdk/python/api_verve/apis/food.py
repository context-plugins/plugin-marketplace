from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cocktail_error import CocktailErrorBody, cocktail_error_mapper
from ..errors.nutrition_error import NutritionErrorBody, nutrition_error_mapper
from ..errors.recipe_error import RecipeErrorBody, recipe_error_mapper
from ..models.v1_cocktail_response import V1CocktailResponse
from ..models.v1_nutrition_response import V1NutritionResponse
from ..models.v1_recipe_response import V1RecipeResponse
from ..server.server import Server


class Food:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FoodWithRawResponse(client, server, auth)

    def cocktail(self, name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CocktailResponse:
        """Get the recipe for a cocktail based on the name or ingredient

        Args:
            name: The name of the cocktail for which you want to get the recipe (e.g., martini)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cocktail(name, request_options=request_options))

    def nutrition(
        self, food: str, *, grams: float | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1NutritionResponse:
        """Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in
        grams.

        Args:
            food: Name of the food to look up (e.g. banana, chicken breast, olive oil)
            grams: Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.nutrition(food, grams=grams, request_options=request_options))

    def recipe(self, name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RecipeResponse:
        """Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with
        ingredients, instructions, prep time, cook time, and servings.

        Args:
            name: The name or description of the recipe you want to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.recipe(name, request_options=request_options))

    @property
    def with_raw_response(self) -> FoodWithRawResponse:
        return self._with_raw_response


class AsyncFood:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFoodWithRawResponse(client, server, auth)

    async def cocktail(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CocktailResponse:
        """Get the recipe for a cocktail based on the name or ingredient

        Args:
            name: The name of the cocktail for which you want to get the recipe (e.g., martini)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cocktail(name, request_options=request_options))

    async def nutrition(
        self, food: str, *, grams: float | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NutritionResponse:
        """Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in
        grams.

        Args:
            food: Name of the food to look up (e.g. banana, chicken breast, olive oil)
            grams: Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.nutrition(food, grams=grams, request_options=request_options))

    async def recipe(self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RecipeResponse:
        """Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with
        ingredients, instructions, prep time, cook time, and servings.

        Args:
            name: The name or description of the recipe you want to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.recipe(name, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFoodWithRawResponse:
        return self._with_raw_response


class FoodWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cocktail(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CocktailResponse, CocktailErrorBody]:
        """Get the recipe for a cocktail based on the name or ingredient

        Args:
            name: The name of the cocktail for which you want to get the recipe (e.g., martini)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cocktail"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CocktailResponse],
            error_mapper=cocktail_error_mapper,
            request_options=request_options,
        )

    def nutrition(
        self, food: str, *, grams: float | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NutritionResponse, NutritionErrorBody]:
        """Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in
        grams.

        Args:
            food: Name of the food to look up (e.g. banana, chicken breast, olive oil)
            grams: Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nutrition"),
            query_params=[param[str]("food", food), param[float | None]("grams", grams)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NutritionResponse],
            error_mapper=nutrition_error_mapper,
            request_options=request_options,
        )

    def recipe(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecipeResponse, RecipeErrorBody]:
        """Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with
        ingredients, instructions, prep time, cook time, and servings.

        Args:
            name: The name or description of the recipe you want to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recipe"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RecipeResponse],
            error_mapper=recipe_error_mapper,
            request_options=request_options,
        )


class AsyncFoodWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cocktail(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CocktailResponse, CocktailErrorBody]:
        """Get the recipe for a cocktail based on the name or ingredient

        Args:
            name: The name of the cocktail for which you want to get the recipe (e.g., martini)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cocktail"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CocktailResponse],
            error_mapper=cocktail_error_mapper,
            request_options=request_options,
        )

    async def nutrition(
        self, food: str, *, grams: float | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NutritionResponse, NutritionErrorBody]:
        """Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in
        grams.

        Args:
            food: Name of the food to look up (e.g. banana, chicken breast, olive oil)
            grams: Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nutrition"),
            query_params=[param[str]("food", food), param[float | None]("grams", grams)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NutritionResponse],
            error_mapper=nutrition_error_mapper,
            request_options=request_options,
        )

    async def recipe(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RecipeResponse, RecipeErrorBody]:
        """Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with
        ingredients, instructions, prep time, cook time, and servings.

        Args:
            name: The name or description of the recipe you want to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/recipe"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RecipeResponse],
            error_mapper=recipe_error_mapper,
            request_options=request_options,
        )
